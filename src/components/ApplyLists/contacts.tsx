export const INITIAL = {
  STATUS: {
    completion: false,
    first_out: false,
    first_pass: false,
    second_out: false,
    second_in: false,
  },
  PART: {
    manage: false,
    design: false,
    dev: false,
  },
};

export const statusKeys = [
  "complete",
  "first-fail",
  "first-pass",
  "second-fail",
  "second-pass",
];

export const statusNames = [
  "지원완료",
  "서류탈락",
  "서류합격",
  "면접탈락",
  "최종합격",
];
