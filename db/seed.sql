\c raffles;

INSERT INTO 
    raffle (raffle_name, secret_token, date_created)
VALUES
    ('Talia', crypt('password', gen_salt('bf')), '2024-01-18 12:00:00'),
    ('Edison', crypt('password', gen_salt('bf')), '2024-01-19 14:30:00'),
    ('Clara', crypt('password', gen_salt('bf')), '2024-01-20 10:45:00');