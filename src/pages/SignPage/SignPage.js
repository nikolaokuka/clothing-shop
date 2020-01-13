import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import './SignPage.scss'

const SignPage = () => (
  <div className='sign-page'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignPage