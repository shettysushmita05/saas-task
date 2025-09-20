import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

interface ProductsTableProps {
  title: string;
  products: Product[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ title, products }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant='h6' sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 2 }}>
            {title}
          </Typography>
          
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                    Quantity
                  </TableCell>
                  <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <TableCell sx={{ color: theme.palette.text.primary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                      {product.name}
                    </TableCell>
                    <TableCell sx={{ color: theme.palette.text.primary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                      {product.price}
                    </TableCell>
                    <TableCell sx={{ color: theme.palette.text.primary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                      {product.quantity}
                    </TableCell>
                    <TableCell sx={{ color: theme.palette.text.primary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                      {product.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductsTable;
