export type PostNotificationRequest = {
    'title': string;
    'message': string;
    'contexte'?: any;
    /**
    * L\'utilisateur que l\'on souhaite notifier
    */
    'utilisateur_id': string;
};
