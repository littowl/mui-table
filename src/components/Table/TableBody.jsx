import {
  TableBody as MaterialTableBody,
  TableCell,
  TableRow,
} from '@mui/material'

export const TableBody = ({ rows }) => {
  return (
    <MaterialTableBody>
      {rows
        ? rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.values(row).map((item) => (
                <TableCell key={item} align="left">
                  {item}
                </TableCell>
              ))}
            </TableRow>
          ))
        : null}
    </MaterialTableBody>
  )
}
