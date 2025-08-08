import React from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { styled } from 'tailwindcss-react-native';
import { Text } from 'react-native';

type RootStackParamList = {
  Result: {
    ticket: string;
    date: string;
    flight: any;
  };
};

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

const StyledView = styled(ScrollView);
const StyledText = styled(Text);

export const ResultScreen = () => {
  const route = useRoute<ResultScreenRouteProp>();
  const { ticket, date, flight } = route.params;

  const flightInfo = Array.isArray(flight) ? flight[0] : flight;

  return (
    <StyledView className="flex-1 p-4 bg-blue-100 rounded-lg">
      <StyledView className="mb-4">
        <StyledText className="text-2xl font-bold text-blue-800 mb-4">
          Resultado del vuelo
        </StyledText>

        <StyledView className="mb-4">
          <StyledText className="text-gray-600 font-semibold">Número de ticket:</StyledText>
          <StyledText className="text-gray-900">{ticket}</StyledText>
        </StyledView>

        <StyledView className="mb-4">
          <StyledText className="text-gray-600 font-semibold">Fecha:</StyledText>
          <StyledText className="text-gray-900">{date}</StyledText>
        </StyledView>

        <StyledView className="mb-4">
          <StyledText className="text-gray-600 font-semibold">Aerolínea:</StyledText>
          <StyledText className="text-gray-900">
            {flightInfo?.airline?.name || 'No disponible'}
          </StyledText>
        </StyledView>

        <StyledView className="mb-4">
          <StyledText className="text-gray-600 font-semibold">Código IATA:</StyledText>
          <StyledText className="text-gray-900">
            {flightInfo?.airline?.iata || 'No disponible'}
          </StyledText>
        </StyledView>

        <StyledView className="mb-4">
          <StyledText className="text-gray-600 font-semibold">Modelo de avión:</StyledText>
          <StyledText className="text-gray-900">
            {flightInfo?.aircraft?.model || 'No disponible'}
          </StyledText>
        </StyledView>

        <StyledView className="mb-4">
          <StyledText className="text-gray-600 font-semibold">Estado del vuelo:</StyledText>
          <StyledText className="text-gray-900">
            {flightInfo?.status || 'No disponible'}
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

