import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

// form validation with Yup package
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Lenght is required')
})


function App() {
  // useState Hook - updating the UI by it state
  const [password, setPassword] = useState('')
 const [isPassGenerated, setIsPassGenerated] = useState(false)


 const [lowerCase, setLowerCase] = useState(false)
 const [upperCase, setUpperCase] = useState(false)
 const [numbers, useNumbers] = useState(false)
 const [symbols, useSymbols] = useState(false)


 // LOGIC
 const generatedPasswordString = (passwordLength: number) => {
   // 
 }

 const createPassword = (characters: string, passwordLength: number) => {
   // 
   let result = ''
   for ( let i = 0; i < passwordLength; i++) {
    const characterIndex = Math.round(Math.random() * characters.length)
    result += characters[characterIndex]
   }
   return result
 }

 const resetPasswordState = () => {
   //
 }

  



  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default App