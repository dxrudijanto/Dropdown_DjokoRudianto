import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    start:'Silakan pilih jenjangnya dulu!',
    list1:'',
    list2:'',
    list3:'',
    list4:'',
    chosenlevel:'Pilih Tingkat',
    // chosenjenjang:'Pilih Jenjang'
    };
  
  first =() =>{     
    this.setState({
      chosenlevel:'Pendidikan Pra Sekolah' ,
      start:'Jenjang Pendidikan Pra Sekolah',
      list1:'PAUD (Pendidikan Anak Usia Dini)',
      list2:'TK (Taman Kanak-kanak)',
      list3:'RA (Raudhatul Athfal)',
    });   
  }

  second =() =>{     
    this.setState({
      chosenlevel:'Pendidikan Dasar' ,
      start:'Jenjang Pendidikan Dasar',
      list1:'SD (Sekolah Dasar )',
      list2:'MI (Madrasah Ibtidaiyah)',
      list3:'SMP (Sekolah Menegah Pertama)',
      list4:'MTs (Madrasah Tsanawiyah)',
    });   
  }

  third =() =>{     
    this.setState({
      chosenlevel:'Pendidikan Menengah' ,
      start:'Jenjang Pendidikan Menengah',
      list1:'SMA (Sekolah Menegah Atas)',
      list2:'MA (Madrasah Aliyah)',
      list3:'SMK (Sekolah Menengah Kejuruan)',
    });   
  }

  fourth =() =>{     
    this.setState({
      chosenlevel:'Pendidikan Tinggi' ,
      start:'Jenjang Pendidikan Tinggi',
      list1:'D3 Diploma',
      list2:'S1/D4 Sarjana',
      list3:'S3 Doktoral',
    });   
  }

  render() {

    return (
      <div>
<center>
  <h1 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}}>Jenjang Pendidikan</h1>
 <div className="container" style={{marginTop:"20px"}}>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"
     style={{width: "300px"}}>{this.state.chosenlevel}</button>
    <div class="dropdown-menu">
        <a className="dropdown-item" onClick= {this.first}>Pendidikan Pra Sekolah</a> <br/>
        <a className="dropdown-item" onClick= {this.second} >Pendidikan Dasar</a> <br/>
        <a className="dropdown-item" onClick= {this.third} >Pendidikan Menegah</a> <br/>
        <a className="dropdown-item" onClick= {this.fourth} >Pendidikan Tinggi</a>
    </div>
  </div>
  </div>
       
       <br/><br/><br/><br/><br/><br/><br/><br/>
       { this.state.start == '' ? 
         <h5>{this.state.start}</h5> :
         <div>
            <u><h5>{this.state.start}</h5></u>
            <p>{this.state.list1}</p>
            <p>{this.state.list2}</p>
            <p>{this.state.list3}</p>
            <p>{this.state.list4}</p> 
          </div>
        }
    </center>
    </div>
    );
  }
}

export default App;
