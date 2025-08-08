import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styled } from 'tailwindcss-react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledTextInput = styled(TextInput);

interface SearchProps {
  onChangeTicketNumber: (text: string) => void;
  ticketNumber: string;
  formatDate: (date: Date) => string;
  onShowDatePicker: () => void;
  showDatePicker: boolean;
  date: Date;
  onDateChange: (event: any, selectedDate?: Date) => void;
  onShowResult: () => void;
}

export const Search = ({ 
  onChangeTicketNumber,
  ticketNumber, 
  formatDate, 
  onShowDatePicker, 
  showDatePicker, 
  date,
  onDateChange,
  onShowResult

}: SearchProps) => {
  return (
    <StyledView className="p-4 bg-blue-100 rounded-lg">
      <StyledView className="mb-4">
    <StyledView className="mb-4">
      <StyledTextInput
        value={ticketNumber}
        onChangeText={onChangeTicketNumber} // <-- actualiza el padre
        placeholder="Enter ticket number"
        className="bg-white rounded-lg px-3 py-2 border border-gray-300 text-base"
      />
    </StyledView>
      </StyledView>

      <StyledView className="mb-4">
        <StyledTouchableOpacity
          onPress={onShowDatePicker}
          className="bg-white rounded-lg px-3 py-2 border border-gray-300"
        >
          <StyledText className="text-base text-gray-700">
            {formatDate(date)}
          </StyledText>
        </StyledTouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
            minimumDate={new Date()}
          />
        )}
      </StyledView>
      
      <StyledTouchableOpacity 
        className="bg-blue-500 px-4 py-2 rounded-lg"
        onPress={onShowResult}
        >
        <StyledText className="text-white font-semibold text-center">
          Search
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}; 