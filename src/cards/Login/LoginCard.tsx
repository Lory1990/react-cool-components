import style from "./LoginCard.module.scss";
import  Button  from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"

export interface ILoginCardProps{

}


export default function LoginCard (props: ILoginCardProps){
   return <div className={style.loginCard}>
<div className={style.loginFields}>
<TextField className={style.loginSingleField} id="outlined-basic" label="Email" variant="outlined" />
<TextField className={style.loginSingleField} id="outlined-basic" label="Password" variant="outlined" />
</div>
<div className={style.forgotPwd}>
    <span><a href="">Password dimenticata?</a></span>
</div>

<div className={style.btnContainer}>
    <Button className={style.loginBtn}>Login</Button>
</div>  
<div className={style.socialLogin}>
<span>Oppure accedi con</span>
<div className={style.socialLoginBtns}>
<Button className={style.roundButton}><img src="./VectorG.png"></img></Button>
<Button className={style.roundButton}><img src="./Vector.png"></img></Button>
</div>
<p>Sei un nuovo utente? <a className={style.registerLink} href="">Registrati</a></p>
</div>
   </div>
}