import 'dart:io';
import 'package:contactmanager/pages/create_contacts.dart';
import 'package:contactmanager/pages/view_contacts.dart';
import 'package:flutter/material.dart';
import 'package:contactmanager/pages/contacts.dart';

void main() {
  if (Platform.isWindows) {
    WidgetsFlutterBinding.ensureInitialized();
    runApp(const MyApp());
  } else {
    exit(0);
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Contact Manager',
      debugShowCheckedModeBanner: false,
      home: Contacts(),
    );
  }
}
