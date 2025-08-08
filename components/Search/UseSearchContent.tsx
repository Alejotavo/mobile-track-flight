import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { styled } from 'tailwindcss-react-native';
import { Search } from './Search'
import { useNavigation } from '@react-navigation/native';
import { postTicketData } from '../../service/service';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define RootStackParamList according to your navigation structure
type RootStackParamList = {
  Result: {
    ticket: string;
    date: string;
    flight: any;
  };
  // Add other screens here if needed
};

const StyledView = styled(View);
const StyledText = styled(Text);

export const UseSearchContent = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState('');

  const handleShowDatePicker = useCallback(() => {
    setShowDatePicker(true);
  }, []);

const formatDate = useCallback((date: Date) => {
  return date.toISOString().split('T')[0]; // Resultado: "2025-08-22"
}, []);

  const onDateChange = useCallback((_event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  }, [date]);

const handleShowResult = useCallback(async () => {
  try {
    const flightData = await postTicketData(formatDate(date), value);
    console.log('Flight data:', flightData);
    navigation.navigate('Result', {
      ticket: value,
      date: formatDate(date),
      flight: flightData,
    });
  } catch (error: any) {
    console.error('Error al buscar el ticket:', error.response?.data || error.message);
    alert('Error al buscar el ticket');
  }
}, [value, date, formatDate, navigation]);



  console.log('Current date:', date);
  console.log(value)

  return (
    <StyledView className="p-4 bg-blue-100 rounded-lg">
      <StyledText className="text-xl font-bold text-blue-800 mb-2">
        Make a search
      </StyledText>
      <StyledText className="text-gray-600 mb-4">
        please provide us the following info
      </StyledText>
      <Search 
        ticketNumber={value}
        onChangeTicketNumber={setValue} // <-- pasás el setter como prop
        formatDate={formatDate} 
        onShowDatePicker={handleShowDatePicker}
        showDatePicker={showDatePicker}
        date={date}
        onDateChange={onDateChange}
        onShowResult={handleShowResult}
      />
    </StyledView>
  );
}; 

