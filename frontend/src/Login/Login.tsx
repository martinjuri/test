import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Modal, Stack, useTheme } from '@mui/material';
import { LoginFormData } from '../interfaces/';

interface LoginProps {
	onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
	const [formData, setFormData] = useState<LoginFormData>({
		username: '',
		password: '',
	});
	const theme = useTheme();
	const [error, setError] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formData.username.includes('@')) {
			setError('Please enter a valid email address');
			return;
		}
		if (!formData.password) {
			setError('The password cannot be empty.');
			return;
		}

		setError('');
		onLogin();
		setOpenModal(true);
	};

	const modalStyle = {
		position: 'absolute' as const,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 320,
		bgcolor: theme.palette.background.paper,
		border: `2px solid ${theme.palette.primary.main}`,
		boxShadow: 24,
		p: 4,
		borderRadius: 3,
		color: theme.palette.text.primary,
	};

	const handleRegisterRedirect = () => {
		navigate('/register');
	};

	const handleSelectLevel = (level: string) => {
		setOpenModal(false);
		navigate(`/play?level=${level}`);
	};

	return (
		<Box
			sx={{
				minHeight: '100vh',
				backgroundColor: theme.palette.background.default,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				px: 2,
			}}
		>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					width: '100%',
					maxWidth: 400,
					bgcolor: theme.palette.background.paper,
					p: 4,
					borderRadius: 2,
					boxShadow: 4,
					color: theme.palette.text.primary,
				}}
			>
				<Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff' }}>
					Log in
				</Typography>

				<TextField
					label="Username"
					variant="outlined"
					fullWidth
					margin="normal"
					value={formData.username}
					onChange={(e) => setFormData({ ...formData, username: e.target.value })}
					sx={{
						'& .MuiInputBase-root': {
							backgroundColor: '#2e2e2e',
							color: theme.palette.text.primary,
						},
						'& .MuiInputLabel-root': {
							color: theme.palette.text.secondary,
						},
					}}
				/>

				<TextField
					label="Password"
					type="password"
					variant="outlined"
					fullWidth
					margin="normal"
					value={formData.password}
					onChange={(e) => setFormData({ ...formData, password: e.target.value })}
					sx={{
						'& .MuiInputBase-root': {
							backgroundColor: '#2e2e2e',
							color: theme.palette.text.primary,
						},
						'& .MuiInputLabel-root': {
							color: theme.palette.text.secondary,
						},
					}}
				/>

				{error && (
					<Typography color="error" variant="body2" sx={{ mt: 1 }}>
						{error}
					</Typography>
				)}

				<Stack spacing={2} direction="row" sx={{ mt: 3 }}>
					<Button type="submit" fullWidth variant="contained" color="primary">
						Login
					</Button>
					<Button
						fullWidth
						variant="outlined"
						onClick={handleRegisterRedirect}
						sx={{
							borderColor: theme.palette.primary.main,
							color: theme.palette.primary.main,
							'&:hover': {
								borderColor: theme.palette.secondary.main,
								color: theme.palette.secondary.main,
							},
						}}
					>
						Register
					</Button>
				</Stack>
			</Box>

			<Modal open={openModal} onClose={() => setOpenModal(false)}>
				<Box sx={modalStyle}>
					<Typography variant="h6" align="center" gutterBottom>
						Select a level
					</Typography>
					<Stack spacing={2}>
						<Button variant="contained" color="success" onClick={() => handleSelectLevel('easy')}>
							Easy
						</Button>
						<Button variant="contained" color="warning" onClick={() => handleSelectLevel('medium')}>
							Medium
						</Button>
						<Button variant="contained" color="error" onClick={() => handleSelectLevel('hard')}>
							Hard
						</Button>
					</Stack>
				</Box>
			</Modal>
		</Box>
	);
};

export default Login;
