export type Ticket = {
    'id': number;
    'subject': string;
    'description': string;
    'descriptionHtml'?: string;
    'status': StatusEnum;
    'createdAt'?: Date;
    'updatedAt'?: Date;
};

export enum StatusEnum {
    New = 'new',
    Open = 'open',
    Pending = 'pending',
    Hold = 'hold',
    Solved = 'solved',
    Closed = 'closed'
}
