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
  const [password, setPassword] = useState('')
 const [isPassGenerated, setPassGenerated] = useState(false)

  



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