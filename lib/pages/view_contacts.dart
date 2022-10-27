import 'package:flutter/material.dart';
import 'package:contactmanager/colors/colors.dart';
import 'package:contactmanager/widget/centered_appbar.dart';

class ViewContacts extends StatefulWidget {
  const ViewContacts({super.key});

  @override
  State<ViewContacts> createState() => _ViewContactsState();
}

class _ViewContactsState extends State<ViewContacts> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      appBar: const ContactManagerCenteredAppbar(),
      body: SafeArea(
        child: Stack(
          children: <Widget>[
            Center(
              child: Column(
                children: <Widget>[
                  const SizedBox(
                    height: 15.0,
                  ),
                  const Text(
                    'اطلاعات مخاطب',
                    style: TextStyle(
                      color: cyan,
                      fontSize: 25,
                      fontWeight: FontWeight.bold,
                      fontStyle: FontStyle.normal,
                    ),
                  ),
                  const SizedBox(
                    width: 1266,
                    child: Divider(
                      height: 36.5,
                      color: cyan,
                      thickness: 0.5,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 10.0),
                    child: Container(
                      width: 950,
                      height: 280,
                      decoration: BoxDecoration(
                        color: currentline,
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
