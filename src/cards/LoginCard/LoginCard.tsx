import style from "./LoginCard.module.scss"
import { Button } from "@buttons"
import classnames from "classnames"
import { ReactComponent as FacebookIcon } from "../../assets/img/icon-facebook.svg"
import { ReactComponent as GoogleIcon } from "../../assets/img/icon-google.svg"
import { Form, Formik } from "formik"
import { ILoginDTO } from "./interfaces/ILoginDTO"
import TextField from "@inputs/TextInput/TextInput.formik"

export interface ILoginCardProps {
    onLogin: (values: ILoginDTO, formikBag: any) => void
    onFacebookLogin: (event: any) => void
    onGoogleLogin: (event: any) => void
    className?: string
    forgotPasswordHref?: string
    isLoading?: boolean
    error?: string
}

export const LoginCard: React.FC<ILoginCardProps> = ({ error, onLogin, className, forgotPasswordHref, isLoading, onGoogleLogin, onFacebookLogin, ...props }: ILoginCardProps) => {
    return (
        <div className={classnames("login-card", style.loginCard, className)}>
            <Formik onSubmit={onLogin} initialValues={{} as ILoginDTO}>
                <Form className={style.loginForm}>
                    <div className={style.loginFields}>
                        <TextField className={classnames(style.loginSingleField, "username-field")} id="username" name="username" label="Email" variant="outlined" disabled={isLoading} />
                        <TextField
                            className={classnames(style.loginSingleField, "password-field")}
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="error-box">{error}</div>
                    <div className={style.forgotPwd}>
                        <span>
                            <a href={forgotPasswordHref}>Password dimenticata?</a>
                        </span>
                    </div>

                    <div className={style.btnContainer}>
                        <Button type="submit" className={style.loginBtn}>
                            Login
                        </Button>
                    </div>
                </Form>
            </Formik>
            <div className={style.socialLogin}>
                <span>Oppure accedi con</span>
                <div className={style.socialLoginBtns}>
                    <Button className={style.roundButton} onClick={onFacebookLogin}>
                        <FacebookIcon />
                    </Button>
                    <Button className={style.roundButton} onClick={onGoogleLogin}>
                        <GoogleIcon />
                    </Button>
                </div>
                <p>
                    Sei un nuovo utente?{" "}
                    <a className={style.registerLink} href="">
                        Registrati
                    </a>
                </p>
            </div>
        </div>
    )
}

export default LoginCard
