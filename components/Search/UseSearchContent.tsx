import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { styled } from 'tailwindcss-react-native';
import { Search } from './Search'

const StyledView = styled(View);
const StyledText = styled(Text);

export const UseSearchContent = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleShowDatePicker = useCallback(() => {
    setShowDatePicker(true);
  }, []);

  const formatDate = useCallback((date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }, []);

  const onDateChange = useCallback((event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  }, [date]);


  return (
    <StyledView className="p-4 bg-blue-100 rounded-lg">
      <StyledText className="text-xl font-bold text-blue-800 mb-2">
        Make a search
      </StyledText>
      <StyledText className="text-gray-600 mb-4">
        please provide us the following info
      </StyledText>
      <Search 
        formatDate={formatDate} 
        onShowDatePicker={handleShowDatePicker}
        showDatePicker={showDatePicker}
        date={date}
        onDateChange={onDateChange}
      />
    </StyledView>
  );
}; 