var data = [{ eventId: 126363, eventKey: "4749466", objectLabelOrUuid: "uuid8083", status: "booked", quantity: 1, ticketType: null, holdTokenHash: null, version: 3, extraData: null }, { eventId: 126363, eventKey: "4749466", objectLabelOrUuid: "uuid11392", status: "free", quantity: 0, ticketType: null, holdTokenHash: null, version: 6, extraData: null }, { eventId: 126363, eventKey: "4749466", objectLabelOrUuid: "uuid8051", status: "booked", quantity: 1, ticketType: null, holdTokenHash: null, version: 2, extraData: null }],
    count = { booked: 0, free: 0 };

data.forEach(({ status }) => count[status]++);

Object.entries(count).forEach(([id, value]) => document.getElementById(id).innerHTML = value)
