import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

const products = {
    1: [{ name: 'Product A' }, { name: 'Product B' }, { name: 'Product C' }],
    2: [{ name: 'Product D' }, { name: 'Product E' }],
    3: [{ name: 'Product F' }, { name: 'Product G' }, { name: 'Product H' }],
};

function Brand() {
    const [checked, setChecked] = React.useState([]);
    const [expanded, setExpanded] = React.useState([]);
    const [selectedProducts, setSelectedProducts] = React.useState([]);
    const items = [
        { id: 0, label: 'Item 1', children: [1, 2, 3] },
        { id: 4, label: 'Item 5' }
    ];

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleExpandClick = (id) => () => {
        const currentIndex = expanded.indexOf(id);
        const newExpanded = [...expanded];

        if (currentIndex === -1) {
            newExpanded.push(id);
        } else {
            newExpanded.splice(currentIndex, 1);
        }

        setExpanded(newExpanded);
    };

    const handleProductClick = (id) => () => {
        setSelectedProducts(products[id] || []);
    };

    const customList = (title, items) => (
        <Card>
            <CardHeader
                sx={{ px: 2, py: 1 }}
                title={title}
            />
            <Divider />
            <List
                sx={{
                    width: 200,
                    height: 230,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {items.map((item) => {
                    const labelId = `transfer-list-all-item-${item.id}-label`;
                    const isExpanded = expanded.indexOf(item.id) !== -1;

                    return (
                        <React.Fragment key={item.id}>
                            <ListItemButton
                                role="listitem"
                                onClick={item.children ? handleExpandClick(item.id) : handleToggle(item.id)}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        checked={checked.indexOf(item.id) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item.label} />
                            </ListItemButton>
                            {item.children && (
                                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {item.children.map((childId) => {
                                            const childLabelId = `transfer-list-all-item-${childId}-label`;
                                            return (
                                                <ListItemButton
                                                    key={childId}
                                                    sx={{ pl: 4 }}
                                                    role="listitem"
                                                    onClick={handleProductClick(childId)}
                                                >
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            checked={checked.indexOf(childId) !== -1}
                                                            tabIndex={-1}
                                                            disableRipple
                                                            inputProps={{
                                                                'aria-labelledby': childLabelId,
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={childLabelId} primary={`Item ${childId + 1}`} />
                                                </ListItemButton>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    );
                })}
            </List>
        </Card>
    );

    const productList = (products) => (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {products.map((product, index) => (
                <ListItemButton key={index}>
                    <ListItemText primary={product.name} />
                </ListItemButton>
            ))}
        </List>
    );

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
            <Grid item>{customList('Choices', items)}</Grid>
            <Grid item>
                {productList(selectedProducts)}
            </Grid>
        </Grid>
    );
}

export default Brand;
