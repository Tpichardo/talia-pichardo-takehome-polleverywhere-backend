\c raffles;

INSERT INTO 
    raffle (raffle_name, secret_token, date_created)
VALUES
    ('Bahamas 2024 Raffle', crypt('password', gen_salt('bf')), '2024-01-18 12:00:00'),
    ('MacBook Pro Raffle', crypt('password', gen_salt('bf')), '2024-01-20 10:45:00');

INSERT INTO participant (first_name, last_name, email, phone_number, raffle_id)
VALUES
    ('Chloe', 'Rodriguez', 'john.doe@email.com', '123-456-7890', 1),
    ('Tony', 'Smith', 'jane.smith@email.com', '987-654-3210', 1),
    ('Michael', 'Johnson', 'michael.johnson@email.com', '555-123-4567', 2),
    ('Emily', 'Williams', 'emily.williams@email.com', '777-888-9999', 1),
    ('Robert', 'Brown', 'robert.brown@email.com', NULL, 2),
    ('Amanda', 'Miller', 'amanda.miller@email.com', '111-222-3333', 2),
    ('David', 'Jones', 'david.jones@email.com', '444-555-6666', 1),
    ('Sophia', 'Davis', 'sophia.davis@email.com', NULL, 1),
    ('Matthew', 'Garcia', 'matthew.garcia@email.com', '999-888-7777', 1),
    ('Olivia', 'Martinez', 'olivia.martinez@email.com', '666-777-8888', 2),
    ('Ethan', 'Wilson', 'ethan.wilson@email.com', '123-456-7890', 2),
    ('Ava', 'Anderson', 'ava.anderson@email.com', '987-654-3210', 2),
    ('Daniel', 'Thomas', 'daniel.thomas@email.com', '555-123-4567', 1),
    ('Isabella', 'Moore', 'isabella.moore@email.com', '777-888-9999', 1),
    ('Mason', 'Lee', 'mason.lee@email.com', NULL, 2),
    ('Emma', 'Walker', 'emma.walker@email.com', '111-222-3333', 2),
    ('Liam', 'Perez', 'liam.perez@email.com', '444-555-6666', 1),
    ('Olivia', 'Wright', 'olivia.wright@email.com', NULL, 2),
    ('Noah', 'Evans', 'noah.evans@email.com', '999-888-7777', 2),
    ('Sophia', 'Hill', 'sophia.hill@email.com', '666-777-8888', 2),
    ('Jackson', 'Baker', 'jackson.baker@email.com', '222-333-4444', 2),
    ('Aiden', 'Hall', 'aiden.hall@email.com', '777-999-1111', 1),
    ('Scarlett', 'Torres', 'scarlett.torres@email.com', '555-666-7777', 2),
    ('Lucas', 'Lopez', 'lucas.lopez@email.com', '888-444-2222', 1);
