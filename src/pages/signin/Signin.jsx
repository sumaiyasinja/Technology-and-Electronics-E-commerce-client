import { useAuth } from './../../hooks/useAuth';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ImGoogle } from 'react-icons/im';

const Signin = () => {
  const {  loginWithGoogle} = useAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Succefully logged in with google.")
  
        
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => toast.error(e.message));
    console.log("Signing in with Google");
  };
    return (
      <div className='flex items-center justify-center'>
        <Toaster></Toaster>
        <div className='flex items-center hover:bg-gray-200 text-red-500 px-7 py-2 rounded-lg  justify-between gap-5' onClick={handleGoogleSignIn}>
        <ImGoogle></ImGoogle>
          <div
                
                className="  rounded "
              >
                Sign In
              </div>
        </div>
      </div>
    );
};

export default Signin;