import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView,
  ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native' ;
import * as SQLite from 'expo-sqlite';

export default function Home() {
    const navigation = useNavigation();
    const db = SQLite.openDatabase("db.db");
    const [names, setNames]=useState()
    const [slack, setSlack]=useState()
    const [git, setGit]=useState()
    const [email, setEmail]=useState()
    const [phone, setPhone]=useState()
    const [master, setMaster]=useState()
    const [certmaster, setCertMaster]=useState()
    const [degree, setDegree]=useState()
    const [certdegree, setCertDegree]=useState()
    const [prof, setProf]=useState()
    const [skill, setSkill]=useState()









    const getCV = () => {

      db.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM cv order by id asc`,
          [],
          (sqlTxn, res) => {
           // alert(rno);
            console.log("retrieved CV record successfully");
            
            var len = res.rows.length;
          for (let i = 0; i < len; i++) {
            let row = res.rows.item(i);
            
                const namesdb = row.names;
                const slackdb = row.slack;
                const gitdb = row.git;
                const emaildb = row.email;
                const phonedb = row.phone;
                const masterdb = row.master;
                const certmasterdb = row.certmaster;
                const degreedb = row.degree;
                const certdegreedb = row.certdegree;
                const profdb = row.prof;
                const skilldb = row.skill;


                setNames(namesdb);
                setSlack(slackdb);
                setGit(gitdb);
                setEmail(emaildb);
                setPhone(phonedb);
                setMaster(masterdb);
                setCertMaster(certmasterdb);
                setDegree(degreedb);
                setCertDegree(certdegreedb);
                setProf(profdb);
                setSkill(skilldb);
                
  
              
          }
          },
          error => {
            console.log("error on getting CV " + error.message);
          },
        );
      });
      }; 
     
     
      useEffect(() => {
        getCV();
       //  addRegister();

       const interval=setInterval(()=>{
        getCV();
       // fetchLocal();
        
       },2000)
    return()=>clearInterval(interval);
     }, [] );

    return (
      <View style={styles.container}>
         <Text style={styles.header}>Curriculum Vitae</Text>
         <SafeAreaView >
      <ScrollView >
                
                 <Text style={{fontSize:20, textAlign:'center'}}>{names}</Text>
                 
                 <Text style={styles.texty}>Slack Name: {slack}  </Text> 
                 
                 <Text style={styles.texty}>GitHub Link: {git}</Text>
                 
                 <Text style={styles.texty} > Email: {email} </Text>
                 
                 <Text style={styles.texty}> Phone : {phone} </Text>
                 
                 <Text style={styles.text} > Education  </Text>
                 <Text style={styles.texty}>{master}</Text>
                 <Text style={styles.texty}>{certmaster}</Text>
                 <Text style={styles.texty}>{degree}</Text>
                 <Text style={styles.texty}>{certdegree}</Text>
                 
        
                 
                 <Text style={styles.text} > Professional Certificate </Text>
                 <Text style={styles.texty}>{prof}</Text>
                 
                 <Text style={styles.text} > Skills  </Text>
                 <Text style={styles.texty}>{skill}</Text>
                 
            <TouchableOpacity style={{backgroundColor:'tan', width:'50%', height:45, alignItems:'center', justifyContent:'center', padding:5, margin:75 }} onPress={()=>navigation.navigate('Edit')} >
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Edit CV</Text>
            </TouchableOpacity>

      </ScrollView>
      </SafeAreaView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:40,
      paddingBottom:10,
      paddingLeft:15,
      paddingRight:10,

    },
    header:{
        fontSize:24,
        fontWeight:'bold',  
        textAlign:'center',
    },
    text:{
      marginLeft:0,
       marginBottom:5, 
       fontWeight:'bold',
       fontSize:16,
       padding:5,
    },
    texty:{
      marginLeft:10,
       marginBottom:5, 
       
       fontSize:14,
    },
  });