import 'package:flutter/material.dart';
import 'package:contactmanager/colors/colors.dart';

class ContactManagerAppbar extends StatelessWidget
    implements PreferredSizeWidget {
  final Widget? title;
  final Color? backgroundColor;

  const ContactManagerAppbar({
    Key? key,
    this.title,
    this.backgroundColor,
  }) : super(key: key);

  @override
  Size get preferredSize => const Size.fromHeight(60.0);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: currentline,
      title: Row(
        textDirection: TextDirection.rtl,
        children: const <Widget>[
          SizedBox(
            width: 120.0,
          ),
          Padding(
            padding: EdgeInsets.only(left: 5.0),
            child: Icon(
              Icons.person,
              color: purple,
            ),
          ),
          SizedBox(
            width: 5.0,
          ),
          Text(
            'اپلیکیشن مدیریت',
          ),
          SizedBox(
            width: 5.0,
          ),
          Text(
            'مخاطبین',
            style: TextStyle(
              color: purple,
              fontWeight: FontWeight.bold,
            ),
          ),
          // Search Bar Here
        ],
      ),
    );
  }
}
