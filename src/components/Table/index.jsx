import { useState, useEffect, useMemo } from 'react'
import { stableSort, descendingComparator } from '../../lib'
import { getAllUsers } from '../../api'
import { Table, TableContainer, Paper } from '@mui/material'
import { SortedHead } from './SortedHead'
import { TableBody } from './TableBody'
import { useFilterStore } from '../../store/useFilterStore'

export const BasicTable = () => {
  const { search } = useFilterStore()

  const [data, setData] = useState([])
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('id')

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  const headCells = useMemo(
    () =>
      data.length
        ? Object.keys(data[0]).map((item) => ({
            id: item,
            numeric: false,
            label: item,
          }))
        : [],
    [data]
  )

  const sortedRows = useMemo(() => {
    const sortedData = data.filter(({ name }) =>
      name.toLowerCase().startsWith(search.toLowerCase())
    )
    return stableSort(sortedData, getComparator(order, orderBy))
  }, [data, search, order, orderBy])

  useEffect(() => {
    getAllUsers().then(({ data: fetchedData }) => {
      const preparedData = fetchedData.map(({ id, name, username, email }) => ({
        id,
        name,
        username,
        email,
      }))
      setData(preparedData)
    })
  }, [setData])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <SortedHead
          headCells={headCells}
          onSort={handleRequestSort}
          order={order}
          orderBy={orderBy}
        />
        <TableBody rows={sortedRows} />
      </Table>
    </TableContainer>
  )
}
