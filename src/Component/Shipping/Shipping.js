import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px'

        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
     
      <input placeholder="your name" style={{ margin: '10px'}} defaultValue={user.displayName} {...register("name")} />
      
      <input placeholder="your email"  style={{ margin: '10px'}} {...register("emailRequired", { required: true })} />
      {errors.emailRequired && <span style={{color: 'red'}}>This field is required</span>}
      
      <input placeholder='address' style={{ margin: '10px'}} {...register("addressRequired", { required: true })} />
      {errors.addressRequired && <span style={{color: 'red'}}>This field is required</span>}
      
                <input style={{ margin: '10px'}} type="submit" />
    </form>
        </div>
    );
};

export default Shipping;