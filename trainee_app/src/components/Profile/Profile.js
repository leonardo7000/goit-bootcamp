import React, { Component } from 'react';
import {withRouter, Link} from "react-router-dom";
import styled from 'styled-components';
import {Button, TextInput, BackArrow, Title}
    from "../ui";
import Select from "../ui/Select";


const ProfileWrapper = styled.div`
        display:flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-image: url("../../assets/img/bg-login.jpg");
    background-size: cover;
    color: #fff;
    padding: 20px 45px;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;

`;


//

//     this.setState({
//         // Аналог obj[inputName]
//         // Вместо ключа используем переменную
//         // Получаем через bind, когда привязываем к инпуту событие
//         [inputName]: value
//     })
// };
//
// onLogin = () => {
//     if (this.state.login.length < 1 || this.state.password.length < 1) {
//         this.setState({
//             visible: true
//         })
//     } else {
//         localStorage.setItem('logged', true);
//
//         // Редирект
//         this.props.history.push("/home");
//     }
// }

const Fotofile = styled.div`
    float: right;
    width: 8em;            
    height: 100%
`;

export class Profile extends Component {
    state = {
        crossfit: false,
        workout: false,
        check: false
    };

    crossfit = () => {
        this.setState(prevState => {
           return {
               crossfit: !prevState.crossfit,
                  }
        })
    };
    workout = () => {
        this.setState(prevState => {
            return {
                workout: !prevState.workout
            }
        })
    };

    check = () => {
        this.setState(prevState => {
            return {
                check: !prevState.check
            }
        })
    };

    onChange = (inputName, event) => {
        // Получили значения инпута
        let value = event.target.value;

        this.setState({
            // Аналог obj[inputName]
            // Вместо ключа используем переменную
            // Получаем через bind, когда привязываем к инпуту событие
            [inputName]:  value
        })
    };

    render() {
        return (
            <ProfileWrapper>
                <Fotofile className="file_upload">
                    <button type="button">Выбрать</button>
                    <div>Файл не выбран</div>
                    <input type="file"/>
                </Fotofile>


                    <TextInput onChange={this.onChange.bind (this, 'textarea')}
                               value={this.state.textarea} placeholder="About your self"
                               type="textarea"
                        // image={UsernameIcon}
                    />
                    <input type="checkbox" id="crossfit"  onClick={this.crossfit}/><label htmlFor="crossfit">CrossFit</label>
                    <input type="checkbox" id="workout" onClick={this.workout} /><label htmlFor="workout">WorkOut</label>
                    <input type="checkbox" id="check" onClick={this.check} /><label htmlFor="check">Check me out</label>


                    <Button type="button"
                                 onClick={this.onLogin}>
                        Save profile
                    </Button>
                    <Button type="button"
                            onClick={this.onLogin}>
                        Change profile
                    </Button>
            </ProfileWrapper>
        );
    }
}

export default Profile;



