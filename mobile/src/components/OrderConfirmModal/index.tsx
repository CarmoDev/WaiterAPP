import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import { Container, OkButton } from './styles';

interface OrderConfirmModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmModal({ visible, onOk }: OrderConfirmModalProps) {
  return (
    <Modal
      visible={visible} animationType="fade"
    >
      <StatusBar style="light" />

      <Container>
        <CheckCircle />

        <Text weight="600" size={20} color="#fff" style={{ marginTop: 12 }}>
          Pedido Confirmado
        </Text>

        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
          O Pedido já entrou na fila de produção
        </Text>

        <OkButton onPress={onOk}>
          <Text color="#D73035" weight="600">
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
