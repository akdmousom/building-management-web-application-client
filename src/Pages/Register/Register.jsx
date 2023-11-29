import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import useAxios from '../../Hooks/Axios/useAxios';
const Register =() => {

    const { createUser, updateUserInfo } = useContext(AuthContext)
    const Axios = useAxios()

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const name = data?.name;
        const img = data?.avatar;

        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                

                

                if (user) {
                    updateUserInfo(name, img)
                    
                        .then(() => {
                            const userData = {
                                userName : user.displayName,
                                userEmail: user.email
                            }

                            Axios.post('/register', userData)
                          

                            

                            if (user) {
                                toast.success('Regiter successful')
                                navigate('/')
                            }
                        })
                        .catch(error => {
                            toast.error(error.message)
                        })
                }

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })

    }



    return (
        <>
            <Helmet>
                <title>DAS Mansion | Register </title>
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register('name')} placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avater URL</span>
                                </label>
                                <input type="url" name='avater' {...register('avatar')} placeholder="Avater URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register('email')} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register('password', { pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "pattern" && (
                                    <p role="alert" className='text-error'>One Capital Letter, One Special Character & One Small Letter Put In Your Password</p>
                                )}
                                <label className="label">
                                    <Link to={'/login'}><p className="label-text-alt link link-hover">Already Have An Account <span>Login</span></p></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Register;