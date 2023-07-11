import * as React from 'react';
// import Box from '@mui/material/Box';
// import P from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetToDefault } from '../../features/answers/answer-slice';
import { useDispatch } from 'react-redux';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#28282c',
  color: 'white',
  border: '2px solid #1976d2',
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow({ quizId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant='outlined'>
        Начать
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            color={'white'}
          >
            Правила прохождения квиза:
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2 }}
            color={'white'}
          >
            {
              <ul>
                <li>
                  {' '}
                  1. Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </li>
                <li>
                  {' '}
                  2. Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </li>
                <li>
                  {' '}
                  3. Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </li>
                <li>
                  {' '}
                  4. Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </li>
                <li>
                  {' '}
                  5. Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </li>
              </ul>
            }
            Нажимая кнопку начать вы соглашаетесь со всеми правилами, что
            описаны выше, и берете на себя полную ответственность за их
            неисполнение.
          </Typography>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mt={'20px'}
          >
            <Link
              to={`/quizStart/${quizId}`}
              onClick={() => {
                dispatch(resetToDefault());
              }}
            >
              <Button variant='outlined' onClick={handleClose}>
                Начать
              </Button>
            </Link>
            <Button variant='outlined' onClick={handleClose}>
              Назад
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
