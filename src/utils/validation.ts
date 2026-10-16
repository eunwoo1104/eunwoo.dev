import * as Yup from "yup";

export const userRegistrationSchema = Yup.object({
  email: Yup.string()
    .email("이메일이 올바르지 않습니다.")
    .max(128, "이메일이 너무 깁니다.")
    .required("이메일을 입력해주세요."),
  password: Yup.string()
    .required("비밀번호를 입력해주세요.")
    .length(64, "비밀번호 검증에 실패했습니다."),
  username: Yup.string().required("사용자 이름을 입력해주세요."),
  nickname: Yup.string().optional(),
});

export const clientUserRegistrationSchema = Yup.object({
  email: Yup.string()
    .email("이메일이 올바르지 않습니다.")
    .max(128, "이메일이 너무 깁니다.")
    .required("이메일을 입력해주세요."),
  password: Yup.string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .required("비밀번호를 입력해주세요."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 다시 입력해주세요."),
  username: Yup.string().required("사용자 이름을 입력해주세요."),
  nickname: Yup.string().optional(),
});
