import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const { width, height } = Dimensions.get('window');
const PLAYER_SIZE = 50;
const ORB_SIZE = 30;

// BUG 1 CORRIGIDO: Garante que o orbe nasça totalmente dentro da tela
const generateRandomPosition = () => {
  return {
    x: Math.random() * (width - ORB_SIZE),
    y: Math.random() * (height - ORB_SIZE),
  };
};

export default function App() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [playerPosition, setPlayerPosition] = useState({ x: width / 2, y: height / 2 });
  const [orbPosition, setOrbPosition] = useState(generateRandomPosition());
  const [score, setScore] = useState(0);

  useEffect(() => {
    // BUG 4 CORRIGIDO: 16ms equivale a ~60 FPS para movimento suave (em vez de 500ms)
    Gyroscope.setUpdateInterval(16);

    const subscription = Gyroscope.addListener(gyroscopeData => {
      setData(gyroscopeData);
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    // BUG 3 CORRIGIDO: Atualização funcional do estado evita dependência direta de playerPosition
    setPlayerPosition(prev => {
      let newX = prev.x + data.y * 3;
      let newY = prev.y - data.x * 3;

      if (newX < 0) newX = 0;
      if (newX > width - PLAYER_SIZE) newX = width - PLAYER_SIZE;
      if (newY < 0) newY = 0;
      if (newY > height - PLAYER_SIZE) newY = height - PLAYER_SIZE;

      return { x: newX, y: newY };
    });
  }, [data]);

  useEffect(() => {
    const playerCenterX = playerPosition.x + PLAYER_SIZE / 2;
    const playerCenterY = playerPosition.y + PLAYER_SIZE / 2;
    const orbCenterX = orbPosition.x + ORB_SIZE / 2;
    const orbCenterY = orbPosition.y + ORB_SIZE / 2;

    const dx = playerCenterX - orbCenterX;
    const dy = playerCenterY - orbCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // BUG 2 CORRIGIDO: A colisão de círculos exige a soma dos RAIOS, não dos diâmetros
    const minDistanceToCollide = (PLAYER_SIZE + ORB_SIZE) / 2;

    if (distance < minDistanceToCollide) {
      setOrbPosition(generateRandomPosition());
      setScore(s => s + 1);
    }
  }, [playerPosition, orbPosition.x, orbPosition.y]);

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Colete o orbe azul!</Text>
      <Text style={styles.score}>Pontos: {score}</Text>
      
      <View
        style={[
          styles.orb,
          {
            left: orbPosition.x,
            top: orbPosition.y,
          },
        ]}
      />
      
      <View
        style={[
          styles.player,
          {
            left: playerPosition.x,
            top: playerPosition.y,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2b7d4',
  },
  instructions: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  score: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  player: {
    position: 'absolute',
    width: PLAYER_SIZE,
    height: PLAYER_SIZE,
    borderRadius: PLAYER_SIZE / 2,
    backgroundColor: '#61e5ff',
    borderWidth: 2,
    borderColor: '#9aeeff',
  },
  orb: {
    position: 'absolute',
    width: ORB_SIZE,
    height: ORB_SIZE,
    borderRadius: ORB_SIZE / 2,
    backgroundColor: '#5cbdfd',
    borderWidth: 2,
    borderColor: '#90c1e1',
  },
});