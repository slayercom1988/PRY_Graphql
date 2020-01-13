//Dependencies
import React, {Component} from 'react'
import {DarkButton, PrimaryButton, Input, RenderIf} from 'fogg-ui'

//Components
import Logo from '@layout/Logo'

//Styles
import styles from './Login.scss'

class Login extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    this.setState({
      ready: true
    })
  }

  render() {
    const {ready} = this.state;
    return (
      <>
        <RenderIf isTrue={ready}>
          <div className={styles.login}>
            <div className={styles.wrapper}>
              <div className={styles.form}>
                <Logo center/>
                <Input
                  type="email"
                  className={styles.email}
                  name="email"
                  placeholder="Email"/>
                <Input
                  type="password"
                  className={styles.login.password}
                  name="password"
                  placeholder="Password"/>
                <div className={styles.actions}>
                  <div className={styles.left}>
                    <DarkButton name="login">
                      Login
                    </DarkButton>
                    <PrimaryButton name="register">
                      Register
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RenderIf>
      </>
    )
  }
}

export default Login
