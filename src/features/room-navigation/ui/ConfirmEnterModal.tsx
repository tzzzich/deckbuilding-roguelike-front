import { Layer, Box, Text, Button } from "grommet";

type Props = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ConfirmEnterModal = ({ open, onCancel, onConfirm }: Props) =>
  open ? (
    <Layer onEsc={onCancel} onClickOutside={onCancel} responsive={false} modal>
      <Box pad="medium" gap="small" width="medium">
        <Text>Перейти в эту комнату?</Text>
        <Box direction="row" justify="between" gap="small">
          <Button label="Отмена" onClick={onCancel} />
          <Button primary label="Войти" onClick={onConfirm} />
        </Box>
      </Box>
    </Layer>
  ) : null;
