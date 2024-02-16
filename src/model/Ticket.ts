export type Ticket = {
    'id': number;
    'subject': string;
    'description': string;
    'description_html'?: string;
    'status': StatusEnum;
    'created_at'?: Date;
    'updated_at'?: Date;
};

export enum StatusEnum {
    New = 'new',
    Open = 'open',
    Pending = 'pending',
    Hold = 'hold',
    Solved = 'solved',
    Closed = 'closed'
}
