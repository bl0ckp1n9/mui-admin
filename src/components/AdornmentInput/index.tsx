import { TextField, TextFieldProps } from '@mui/material';

interface AdornmentInputProps {
    adornment: React.ReactNode;
    props: TextFieldProps;
}

export default function AdornmentInput({
    adornment,
    props,
}: AdornmentInputProps) {
    return (
        <TextField
            {...props}
            InputProps={{
                startAdornment: adornment,
                sx: { paddingY: '0.5rem' },
            }}
        />
    );
}
