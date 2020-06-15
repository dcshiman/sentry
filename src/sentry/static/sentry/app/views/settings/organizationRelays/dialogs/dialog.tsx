import React from 'react';

import {ModalRenderProps} from 'app/actionCreators/modal';
import Button from 'app/components/button';
import ButtonBar from 'app/components/buttonBar';
import {t} from 'app/locale';

type Props = {
  onSave: () => void;
  title: string;
  content: React.ReactElement;
  disabled: boolean;
} & ModalRenderProps;

const Dialog = ({
  title,
  onSave,
  content,
  disabled,
  Header,
  Body,
  Footer,
  closeModal,
}: Props) => (
  <React.Fragment>
    <Header closeButton>{title}</Header>
    <Body>{content}</Body>
    <Footer>
      <ButtonBar gap={1.5}>
        <Button onClick={closeModal}>{t('Cancel')}</Button>
        <Button onClick={onSave} disabled={disabled} priority="primary">
          {t('Save Relay')}
        </Button>
      </ButtonBar>
    </Footer>
  </React.Fragment>
);

export default Dialog;