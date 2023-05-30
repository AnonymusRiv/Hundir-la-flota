import React, { useState } from 'react';
import Datos from './../Components/Perfil';

export const Profile  = () => {
    return (
      <div>
        <h3 className="Auth-form-title">Profile</h3>
            <Perfil name="John" surname="Doe" email="johndoe@example.com" />
      </div>
    );
  };

  export default Profile;