import React, { PropTypes } from 'react';

class VoucherDetailsForm extends React.Component  {
    updateProperty(event) {
        let type = event.currentTarget.type;
        let value;
        if (type === "text") {
            value = event.currentTarget.value;
        }
        if (type === "number") {
            value = parseInt(event.currentTarget.value, 10);
        }
        if (type === "checkbox") {
            value = event.currentTarget.checked;
        }
        this.props.updateVoucherProperty(this.props.id, event.currentTarget.name, value);
    }
    render() {
        const { brandName, serialNumber, cvv, seller, owner, isPaperVoucher, bulkId, invoiceNumber, orderNumber, status} = this.props;
        let bindedUpdateProperty = this.updateProperty.bind(this);
        return (
            <div className="voucher-details-form">
                <div className="form-field">
                    <label htmlFor="owner">Owner</label><input type="text" name="owner"
                                                                id="owner"
                                                                value={owner}
                                                                onChange={bindedUpdateProperty}/>
                </div>
                <div className="form-field">
                    <label htmlFor="status">Previous Owner</label><span id="status">{seller}</span>
                </div>
                <div className="form-field">
                    <label htmlFor="serial">Serial</label><input type="number" name="serialNumber"
                                                                                id="serial"
                                                                                value={serialNumber}
                                                                                onChange={bindedUpdateProperty}/>
                </div>
                <div className="form-field">
                    <label htmlFor="isPaperVoucher">Paper Voucher</label><input type="checkbox" name="isPaperVoucher"
                                                                        id="isPaperVoucher"
                                                                        checked={isPaperVoucher}
                                                                        onChange={bindedUpdateProperty}/>
                </div>
                <div className="form-field">
                    <label htmlFor="cvv">CVV</label><input type="number" name="cvv"
                                                           id="cvv"
                                                           value={cvv}
                                                            onChange={bindedUpdateProperty}/>
                </div>
                <div className="form-field">
                    <label htmlFor="status">Bulk Id</label><span id="status">{bulkId}</span>
                </div>
                <div className="form-field">
                    <label htmlFor="status">Invoice Number</label><span id="status">{invoiceNumber}</span>
                </div>
                <div className="form-field">
                    <label htmlFor="status">Order Number</label><span id="status">{orderNumber}</span>
                </div>
                <div className="form-field">
                    <label htmlFor="brandName">Brand</label><input type="text" name="brandName"
                                                                id="brandName"
                                                                value={brandName}
                                                                onChange={bindedUpdateProperty}/>
                </div>
                <div className="form-field">
                    <label htmlFor="status">Status</label><span id="status">{status}</span>
                </div>
            </div>

        )
    }
}

VoucherDetailsForm.propTypes = {
    id: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    serialNumber: PropTypes.number.isRequired,
    cvv: PropTypes.number.isRequired,
    seller: PropTypes.string.isRequired,
    owner: PropTypes.string,
    isPaperVoucher: PropTypes.bool.isRequired,
    bulkId: PropTypes.string.isRequired,
    invoiceNumber: PropTypes.string.isRequired,
    orderNumber: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    updateVoucherProperty: PropTypes.func.isRequired
};

export default VoucherDetailsForm;