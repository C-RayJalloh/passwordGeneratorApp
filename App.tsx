import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

// form validation with Yup package
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Lenght is required')
})


function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
    )
}

export default App