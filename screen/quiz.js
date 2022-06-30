import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'



function shuffle(array) {
    for(let i = array.length -1; i >0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);

       const getQues = async ()=>{
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions( generateOptionsAndShuffle(data.results[0]));
        

    };
       
   useEffect(()=>{
         getQues();
   },[])

   const  handleNextPress = ()=>{
        setQues(ques+1);
        setOptions( generateOptionsAndShuffle(questions[ques+1]));
   }

   const generateOptionsAndShuffle = (_question)=>{
     const options = [..._question.incorrect_answers];
        options.push(_question.correct_answer);
        shuffle(options);
        return options;
   } 

   const handleOptionSelect = (_option)=>{
     if(_option===questions[ques].correct_answer){
        setScore(score+10);
     } 
     if(ques!==9){
        console.log(_option===questions[ques].correct_answer)
        console.log(score)
        setQues(ques+1);
        setOptions( generateOptionsAndShuffle(questions[ques+1]));
     }
     if(ques===9){
       handleResults();
     }
   }


  const  handleResults = ()=> {
    navigation.navigate('Results', {
        score: score
    })
  }
   


  return (
    <View style={styles.container}>
        {questions && (
        <View style={styles.parent}>
            <View style={styles.header}>
            <Text style={styles.headerText} >Q.{ decodeURIComponent(questions[ques].question)}</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleOptionSelect(options[0])}>
                <Text  style={styles.option} >{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handleOptionSelect(options[1])}>
                <Text style={styles.option} >{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handleOptionSelect(options[2])}>
                <Text style={styles.option} >{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={()=>handleOptionSelect(options[3])} >
                <Text style={styles.option} >{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
        </View>

        </View>)}
       

        <View style={styles.bottom}>
           {/* <TouchableOpacity  style={styles.button}>
                <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity> */}

           {ques!==9 && <TouchableOpacity  style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity> }

             {ques===9 &&<TouchableOpacity  style={styles.button} onPress={handleResults}>
                <Text style={styles.buttonText}>Show Result</Text>
            </TouchableOpacity> }
        </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },
    header:{
         marginVertical:16,
    },
    headerText:{
       fontSize:27,
    },
    parent:{
        flex:1,
    },
    options:{
        marginVertical:16,
        flex:1,
    },
    option:{
      fontSize:24,
    },
    optionButton:{
        padding:12,
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:'#4895ef',
        borderRadius:16,
    },
    bottom:{
       marginBottom:12,
       paddingVertical:16,
       justifyContent: 'space-between',
       flexDirection: 'row',
      
    },
    button:{
        backgroundColor:'#0077b6',
        padding:12,
        paddingHorizontal:16,
        borderRadius:16,
        alignItems: 'center',
        marginBottom:30,
    },
     buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'300',
      
    } 
})