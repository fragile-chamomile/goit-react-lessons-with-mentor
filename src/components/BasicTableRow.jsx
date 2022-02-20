import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

export default function BasicTableRow({
    airlineName,
    airlineLogo,
    passengerName,
    airlineSlogan,
    airlineWebsite,
}) {
    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{airlineName}</TableCell>
                <TableCell><Avatar variant="square" alt={airlineName} src={airlineLogo} /></TableCell>
                <TableCell>{passengerName}</TableCell>
                <TableCell>{airlineSlogan}</TableCell>
                <TableCell> <Link href={airlineWebsite}>{airlineWebsite}</Link></TableCell>
            </TableRow>
        </>
    );
}
