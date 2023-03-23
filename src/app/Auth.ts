import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from './hooks'

import { registerFilled, registerRejected, loginFilled,loginRejected,logoutFilled  } from './reducers/auth'

export function Auth() {
  // The `state` arg is correctly typed as `RootState` already
  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  // omit rendering logic
}