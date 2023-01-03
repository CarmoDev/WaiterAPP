import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/FormatCurrency';

import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  isLoading: boolean;
  onChangeOrderStatus: () => void;
}

export function OrderModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Fechar modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'Waiting' && '⏱'}
              {order.status === 'in_Production' && '👨🏼‍🍳'}
              {order.status === 'Done' && '✅'}
            </span>
            <strong>
              {order.status === 'Waiting' && 'Fila de Espera'}
              {order.status === 'in_Production' && 'Em Produção'}
              {order.status === 'Done' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`https://waiterapp-api-production.up.railway.app/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="42"
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <small>{formatCurrency(product.price)}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total:</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'Done' && (
            <button
              type="button"
              className="primary"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === 'Waiting' && '👨🏼‍🍳'}
                {order.status === 'in_Production' && '✅'}
              </span>
              <strong>
                {order.status === 'Waiting' && 'Iniciar Produção'}
                {order.status === 'in_Production' && 'Concluir Pedido'}
              </strong>
            </button>
          )}

          <button
            type="button"
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
