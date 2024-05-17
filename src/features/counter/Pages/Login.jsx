import {useFormik} from "formik"
import "../Pages/Login.css"
import { useDispatch } from "react-redux"
import { loginUser } from "../home/HomeSlice"

const Login = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: ' ',
            password: ' ',
        },
        validate: (values) => {
            let error = {}
            if (!values.username) {
                error.username = "Please enter username"
            }
            if (!values.password) {
                error.password = "Please enter Password"
            }
            
            return error
        },
        onSubmit: (values) => {
             
            dispatch(loginUser(values))
        }
    })
    return (
        <>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input 
                
                type="text"
                name="username" 
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Enter username"
                className={formik.errors.username && 'is-error' }
                
                />
                {formik?.errors?.username && <p>{formik?.errors?.username}</p>}
            </div>
            <div>
            <input 
                 
                type="password"
                name="password" 
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="*****"
                className={formik.errors.password && 'is-error'}
                
                />
                {formik?.errors?.password && <p>{formik?.errors?.password}</p>}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        </>
    )
}

export default Login