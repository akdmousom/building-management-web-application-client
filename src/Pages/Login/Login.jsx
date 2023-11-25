import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const Login = () => {

    const { register, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                if (user) {

                    toast.success('Login Successfull')
                    navigate('/')
                }
            })
            .catch((error)=>{
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
    }



    return (
        <>
            <Helmet>
                <title>DAS Mansion | Login </title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'{...register('email')} placeholder="email" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register('password')} placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/register'}><p href="#" className="label-text-alt link link-hover">I don&apos;t have an account register</p></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;