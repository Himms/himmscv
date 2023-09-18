import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput, SafeAreaView,
  ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native' ;
import * as SQLite from 'expo-sqlite';



export default function Edit() {
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
   


    const createTables = () => {
      db.transaction(txn => {
        txn.executeSql(
          `CREATE TABLE IF NOT EXISTS cv (id INTEGER PRIMARY KEY AUTOINCREMENT, names VARCHAR(200), slack VARCHAR(200),
           git VARCHAR(200), email VARCHAR(200),
           phone VARCHAR(200), master VARCHAR(200), certmaster VARCHAR(200),  degree VARCHAR(200),  certdegree VARCHAR(200),  
                prof VARCHAR(200), skill VARCHAR(200))`,
          [],
          (sqlTxn, res) => {
            console.log(" CV table created successfully");
          },
          error => {
            console.log("error on creating table " + error.message);
          },
        );
      });
    };
    
  
   
  
    const editCV = () => {
      db.transaction(txn => {
          txn.executeSql(
            `INSERT INTO cv (names, slack, git, email, phone, master, certmaster, degree, certdegree, prof, skill) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
            [names,slack,git,email,phone,master, certmaster, degree, certdegree, prof, skill],
            (sqlTxn, res) => {
              
              alert('CV edited successfully');
            },
            error => {
              alert('Record already exist');
              console.log("error on adding Admin " + error.message);
            },
          );
        });
      };
  
      useEffect(() => {
        createTables();
       //  addRegister();
     }, []);



     const getCV = () => {

      db.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM cv `,
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
     }, []);

    return (
      <View style={styles.container}>
        <SafeAreaView >
      <ScrollView >
                 <Text style={{fontSize:20, textAlign:'center', fontWeight:'bold'}}> Edit Curriculum Vitae</Text>
                 <Text style={styles.text}>Name</Text>
                 <TextInput style={styles.input}
                 onChangeText={setNames}
                 value={names}
                 />
                 <Text style={styles.text}>Slack Name</Text>
                 <TextInput style={styles.input}
                 onChangeText={setSlack}
                 value={slack}
                 />
                 <Text style={styles.text}>GitHub Link</Text>
                 <TextInput style={styles.input}
                 onChangeText={setGit}
                 value={git}
                 />
                 <Text style={styles.text} > Email </Text>
                 <TextInput style={styles.input}
                 onChangeText={setEmail}
                 value={email}
                 />
                 <Text style={styles.text}> Phone </Text>
                 <TextInput style={styles.input}
                 onChangeText={setPhone}
                 value={phone}
                 />
                 <Text style={styles.text} > Master Degree </Text>
                 <TextInput style={styles.input} placeholder='Institution and Date'
                 onChangeText={setMaster}
                 value={master}
                 />
                 <TextInput style={styles.input} placeholder='Certificate obtained'
                 onChangeText={setCertMaster}
                 value={certmaster}
                 />
                 <Text style={styles.text} > Bachelor's Degree </Text>
                 <TextInput style={styles.input} placeholder='Institution and Date'
                 onChangeText={setDegree}
                 value={degree}
                 />
                 <TextInput style={styles.input} placeholder=' Certicate obtained'
                 onChangeText={setCertDegree}
                 value={certdegree}
                 />
                 
                 <Text style={styles.text} > Professional Certificate </Text>
                 <TextInput style={styles.input} placeholder='Certificate'
                 onChangeText={setProf}
                 value={prof}
                 
                 />
                 <Text style={styles.text} > Skills  </Text>
                 <TextInput style={styles.input}
                 onChangeText={setSkill}
                 value={skill}
                 />
                 
                 

                 <TouchableOpacity style={{backgroundColor:'tan', width:'50%', height:45, alignItems:'center', justifyContent:'center', padding:5, margin:20 }} onPress={editCV} >
                <Text style={{fontSize:22, fontWeight:'bold', color:'white'}}>Submit</Text>
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
      
      padding:10,
    },
    text:{
      marginLeft:15,
       marginBottom:5, 
       fontWeight:'bold',
       fontSize:16,
    },
    input:{
      marginLeft:15,
       marginBottom:10, 
       borderColor:'grey',
       borderWidth:1,
       borderRadius:100/50,
       padding:5,
    },
  });