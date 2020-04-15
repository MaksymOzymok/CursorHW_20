import React from "react";

export default class AddForm extends React.Component{
    state = {
        author : 'skywalker',
        text : '',
        img : '',
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    };
    sentData = ()=>{
        let userData;
        switch (this.state.author) {
            case "skywalker":
                userData = {
                    name: "Anakin skywalker",
                    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
                    nickname: "@dart_vader",
                    verified: true
                };
                break;
            case "chubaka":
                userData = {
                    name: "Chubaka",
                    photo: "https://st4.depositphotos.com/1034518/19593/i/450/depositphotos_195937664-stock-photo-cannes-france-may-2018-chewbacca.jpgі",
                    nickname: "@chubaka",
                    verified: true
                };
                break;

        }
       let contentData = {
            text: this.state.text,
                image: this.state.img,
                date: 'Apr  ' + new Date().getDate()
        };
        let postData =  {
                id : 12,
                comments: 0,
                sharing: 0,
                likes: 0,
            liked : false,
            commented:false,
            shared : false
        };

           let obj = {
               userData : userData,
               contentData : contentData,
               postData : postData,
           };

        this.props.getData(obj);
        this.setState({author : 'skywalker', img : '',text : ''});
        return obj;
    };
     setAuthor = (e)=>{this.setState({author : e.target.value})};
    render() {
        return(
            <form  style={{marginBottom : '150px',width : '500px', height :'100px' ,backgroundColor : 'red', margin : '50px auto',textAlign : 'center',paddingTop: '30px'}} action="">
                <select name="author" id="" onChange={this.handleInputChange}>
                    <option value="skywalker" name='author'>skywalker</option>
                    <option value="chubaka"  name='author'>chubaka</option>
                </select>
                <input name = 'text' placeholder={"post text"} value={this.state.text} onChange={this.handleInputChange} type="text"/>
                <input name = 'img' placeholder={"image url"} value={this.state.img} onChange={this.handleInputChange} type="text"/>
                <button type="button" onClick={this.sentData}> Add</button>
            </form>
        )
    }
}