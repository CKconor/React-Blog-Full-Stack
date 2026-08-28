#!/usr/bin/env bash
# Verifies that cv-conor-kemp.pdf survives ATS text extraction.
#
#   npm run cv:verify
#
# Applications go through Greenhouse/Workable-class parsers, which read the PDF
# text layer before any human does. Several innocuous-looking CSS choices
# silently corrupt that layer while looking perfect in a browser — three were
# found and fixed during the CV rewrite, two of them introduced BY the rewrite.
# Run this after any change to src/data/cv.ts or scripts/build-cv.mjs.
#
# Requires pdftotext (poppler).

set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

PDF="cv-conor-kemp.pdf"
RAW="$(mktemp)"
fails=0

check() { # name, condition-result
  if [ "$2" -eq 0 ]; then
    printf '  \033[32mPASS\033[0m  %s\n' "$1"
  else
    printf '  \033[31mFAIL\033[0m  %s\n' "$1"
    fails=$((fails + 1))
  fi
}

if [ ! -f "$PDF" ]; then
  echo "No $PDF — run: npm run cv:export"
  exit 1
fi

if ! command -v pdftotext >/dev/null 2>&1; then
  echo "pdftotext not found. Install poppler-utils to run this check."
  exit 1
fi

pdftotext -raw "$PDF" "$RAW"
echo "ATS extraction checks for $PDF"

# 1. Forename and surname must stay separate in content-stream order.
#    Negative letter-spacing on the h1 collapses them into "ConorKemp".
grep -q '^Conor Kemp$' "$RAW"; check "name extracts with a space" $?

# 2. Employment dates must use a mappable separator. An en-dash extracts as
#    byte 0xAD — and dates are what Greenhouse uses to derive years of experience.
date_count=$(grep -cE '[A-Z][a-z]{2} 20[0-9]{2} - (Present|[A-Z][a-z]{2} 20[0-9]{2})' "$RAW")
[ "$date_count" -eq 5 ]; check "all 5 date ranges use an ASCII hyphen (found $date_count)"  $?

# 3. Contact fields must be present — they were absent entirely before the rewrite.
grep -q '@' "$RAW";           check "email present" $?
grep -q 'Worcester' "$RAW";   check "location present" $?

# 4. No unmappable glyphs. Formfeeds are page separators and are expected.
LC_ALL=C tr -d '\f' < "$RAW" | LC_ALL=C grep -q '[^ -~]'
[ $? -ne 0 ]; check "no non-ASCII in extracted text" $?

# 5. Each tech line must immediately follow its own role's bullets, not be
#    batched at the end. Opacity and positioned list markers both break this.
awk '/^Configur -- Lead Frontend Developer/{f=1} f&&/^React, TypeScript, Next\.js, TanStack Query, Zustand/{print "ok"; exit}' "$RAW" | grep -q ok
check "tech line stays bound to its role" $?

# 6. Hyphenated keywords must not be split across a line break.
grep -q 'styled-components' "$RAW"; check "styled-components not split at the hyphen" $?

# 7. Two pages, per the agreed page budget.
pages=$(pdftotext "$PDF" - | tr -cd '\f' | wc -c | tr -d ' ')
[ "$pages" -eq 2 ]; check "page count is 2 (found $pages)" $?

# 8. High-frequency keywords the market research identified as missing.
for kw in JavaScript Agile Playwright Mentoring AWS; do
  grep -q "$kw" "$RAW"; check "keyword present: $kw" $?
done

rm -f "$RAW"
echo
if [ "$fails" -eq 0 ]; then
  echo "All checks passed."
else
  echo "$fails check(s) failed."
fi
exit "$fails"
