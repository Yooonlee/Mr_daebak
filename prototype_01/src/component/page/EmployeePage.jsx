import LogOut from "./LogOut";
import Button from "../ui/Button";
import InvenMang from "../ui/InventoryManagement";
import AccMag from "../ui/AccounttManagement";
import DeliveryStatus from "../ui/DeliveryStatus";

function EmployeePage() {
    return (
        <>
            <LogOut />
            <InvenMang />
            <AccMag />
            <DeliveryStatus />
        </>
    )
}

export default EmployeePage;