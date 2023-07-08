import React from "react"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

interface DatePickerProps {
	label: string
	helperText?: string
	value?: Date | null
	onChange?: (date: Date | null) => void
}

export default function BasicDatePicker(props: DatePickerProps) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker
					label={props.label}
					slotProps={{
						textField: {
							helperText: props.helperText,
						},
					}}
					value={props.value}
					onChange={props.onChange}
				/>
			</DemoContainer>
		</LocalizationProvider>
	)
}
